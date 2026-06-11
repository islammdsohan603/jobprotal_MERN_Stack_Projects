'use server'


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const createJob = async (newJobData) => {
  try {
    if (!baseUrl) {
      return { error: 'Backend base URL is not configured' };
    }

    console.log('Creating job with baseUrl:', baseUrl);
    console.log('Job data:', newJobData);

    const res = await fetch(`${baseUrl}/api/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJobData)
    });

    console.log('Response status:', res.status);
    console.log('Response headers:', Object.fromEntries(res.headers));

    // Check if response is JSON
    const contentType = res.headers.get('content-type');
    let data;

    if (contentType?.includes('application/json')) {
      data = await res.json();
    } else {
      const text = await res.text();
      console.log('Non-JSON response:', text.substring(0, 500));
      return { error: `Backend error (${res.status}): Server returned HTML instead of JSON` };
    }

    if (!res.ok) {
      return { error: data?.error || `Failed to create job: ${data?.message || res.statusText}` };
    }

    return data;

  } catch (error) {
    console.error('Job creation error:', error);
    return { error: `Failed to connect to backend: ${error.message}` };
  }
}

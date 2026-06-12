'use server'


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const createJob = async (newJobData) => {
  try {
    const res = await fetch(`${baseUrl}/api/jobs`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJobData)
    })


    return await res.json()

  } catch (error) {
    console.error('Job creation error:', error);
    return { error: `Failed to connect to backend: ${error.message}` };
  }
}


export const getCompanyData = async (companyData) => {
  try {
    const res = await fetch(`${baseUrl}/api/company`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyData),
    });

    if (!res.ok) {
      throw new Error('Failed to post company data');
    }

    return await res.json();
  } catch (error) {
    console.log('data post error:', error);
    throw error;
  }
};
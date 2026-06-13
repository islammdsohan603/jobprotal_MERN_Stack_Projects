const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const getCompanyJobs = async (companyId, status = 'active') => {
  try {
    const res = await fetch(`${baseUrl}/api/jobs?companyId=${companyId}&status=${status}`)

    return await res.json()

  } catch (error) {
    console.log('Get Data', error)
  }
}


export const getNewComapnyJobs = async () => {

  try {

    const res = await fetch(`${baseUrl}/api/company`)
    return await res.json()

  }
  catch (error) {
    console.log('Register Company ', error)
  }

}
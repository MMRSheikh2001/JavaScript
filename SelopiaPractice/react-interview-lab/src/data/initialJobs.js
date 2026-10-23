

export default async function initialJobs() {

    let data = await fetch("http://localhost:8090/api/jobs/");
    let jobs = data.json();


    return jobs;
}
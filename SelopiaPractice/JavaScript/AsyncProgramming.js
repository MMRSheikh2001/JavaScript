async function getJobs() {
    try {
        let jobs = await fetch("http://localhost:8090/api/jobs/");

        if (!jobs.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = jobs.json();
        return data;


    } catch (error) {
        console.log("==================Test=======================");

        console.log(error);
    }

}

console.log(await getJobs());
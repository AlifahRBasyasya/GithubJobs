const base_URL = "http://dev3.dansmultipro.co.id/api/recruitment/positions";

class JobService {

    async getJobList() {
        let res = await fetch(base_URL + ".json");
        res = await res.json();
        return res;
    }

    async searchJob(query) {
        let url = base_URL + ".json?";
        if (query.term != "") {
            url += "description=" + query.term + "&";
        }

        if (query.location != "") {
            url += "location=" + query.location + "&";
        }

        if (query.fulltime == true) {
            url += "full_time=true";
        }

        let res = await fetch(url);
        res = await res.json();
        return res;
    }

    async getJobDetail(id) {
        let res = await fetch(base_URL + "/" + id);
        res = await res.json();
        return res;
    }
}

export default new JobService()

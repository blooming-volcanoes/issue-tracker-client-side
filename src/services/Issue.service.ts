/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import httpReq from "./http.service";

class IssueReq {
    async createIssue(payload: any) {
        const data = await httpReq.post("/issue", payload).then((data) => data);
        return data;
    }

    async getAllIssues() {
        const data = await httpReq.get("/issue/all").then((data) => data);
        return data;
    }

    async getIssue(id: any) {
        const data = await httpReq.get(`/issue/${id}`).then((data) => data);
        return data;
    }

    async approveIssue(id: any, payload: any) {
        const data = await httpReq.put(`/issue/${id}`, payload).then((data) => data);
        return data;
    }
<<<<<<< HEAD

    async addComment(id: any, payload: any) {
        const data = await httpReq.put(`/comment/${id}`, payload).then((data) => data);
        return data;
    }

    async editIssue(id: any, payload: any) {
        const data = await httpReq.put(`/issue/${id}`, payload).then((data) => data);
        return data;
    }
=======
>>>>>>> 690308be5cd3958a24faf9db8d12562fb7ae173a
}

const IssueHttpReq = new IssueReq();

export default IssueHttpReq;

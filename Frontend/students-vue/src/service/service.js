import http from "@/http-common";

class studentService{
    create(data){
        return http.post("/students/insert", data);
    }
    getAll(){
        return http.get("/students/getAll");
    }
    deleteStudents(id){
        return http.delete(`/students/delete/${id}`);
    }
    updateStudents(id, data){
        return http.put(`/students/update/${id}`, data)
    }
    getById(id){
        return http.get(`/students/getById/${id}`)
    }
}

export default new studentService();


class CreateServer{
   #privateApp;
   #privatePort;
   #privatePost;

    
    constructor(app, port, post){
        this.#privateApp = app;
        this.#privatePort = port;
        this.#privatePost = post;
        this.on();        
    }

    on(){
        this.#privateApp.listen(this.#privatePort, () => {
            console.log("Servidor rodando em http://localhost:3030");
        });

        this.#privateApp.get("/", function(req, res){
            res.render("forms");
        });

        this.#privateApp.post("/add", function(req, res){
           
        })
    }

}

module.exports = CreateServer;

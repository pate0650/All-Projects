const addProject = {
    data: function() {
        return {
            project : {
               link: '',
                projectName:'',
            }
        }
    },
    methods: {
        addProject: function() {
            if(!this.project.projectName){
                alert("projectName is Required.")
            }  else if (!this.project.link) {
                alert("Link is Required.")
            } else {
                db.collection('projects').add({
                    link: this.project.link,
                    projectName: this.project.projectName
                }).then(doc => this.$router.push('/project/'+doc.id))
            }
            
        }
    }
    ,
    template: `
    <section>
        <router-link to="/">< Back to list</router-link>
        <h2 class="text-center">Add Project</h2>

        <form class="text-center">
            <div class="form-row">
                <div class="col">
                    <div class="form">
                        <label for="formFirstName">Project Name</label>    
                        <input type="text" id="formFirstName" class="form-control" v-model=project.name>
                    </div>
                </div>
            </div>
            <div class="form my-3">
                <label for="formLink">Link</label>
                <input type="Link" id="formEmail" class="form-control" v-model=project.link>
            </div>
            <button class="btn btn-success" @click.prevent="addProject">Add Project</button>
        </form>
        </section>
    `
}

// HOME view
const Home = {
    data: function() {
        return {
            projects:[], 
            search: ''
        }
    },
    computed: {
        filteredProjects() {
            return this.projects.filter(project => {
                return project.searchTerm.includes(this.search.toLowerCase())
            })
        }
    },
    mounted: function(){
        db.collection('projects').orderBy('name').onSnapshot(snapshot => {
            const data = []
            snapshot.forEach(doc => {
                data.push({ id: doc.id, data: doc.data(), searchTerm: doc.data().name.toLowerCase()})
            })
            this.projects = data
        })
    },
    template:`
    <section>
        <div class="row">
             <div class="col-md-9">
                 <h2> Project List </h2>
                 <div class="form">
                    <input class="form-control" type="text" placeholder="Search" area-lable="Search" v-model=search>
                </div>
            </div>
            <div class="col-md-3">
                <router-link to="/add/"> <button class="btn btn-primary"><i class="fa fa-plus-circle" aria-hidden="true"></i></button></router-link>
            </div>
        </div>
        <ul class="list-group list-group-flush" style="max-height: 50rem; overflow-y: scroll;">
                <li class="list-group-item" v-for="project in filteredProjects">
                    <router-link :to="'/project/' + project.id">{{project.data.name}}</router-link>
                </li>
            </ul>
    </section>
    `
}
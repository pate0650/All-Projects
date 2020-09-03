
const project = {
    props:['id'],
    data: function() {
        return {
            project : {
                link: '',
                name: ''
            }
        }
    },
    mounted: function() {
        db.collection('projects').doc(this.id).get().then(
            doc => {
                if(doc.exists){
                    this.project.link = doc.data().link
                    this.project.name = doc.data().name
                } else {
                    
                }
            }
        )
    },
    template: `
    <section>
    <router-link to="/">< Back to list</router-link>
    <div class="row">
      <div class="col-md-9">
        <h2 v-show=project.name>{{ project.name }}</h2>
      </div>
      <div class="col-md-3">
      </div>
    </div>
        
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <h5>Link</h5>
               <a href="{{ project.link }}"> </a>
            </li>
        </ul>
        </section>
    `
}
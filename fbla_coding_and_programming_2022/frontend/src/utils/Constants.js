
class rendStatus
{
    render_options = false;


    setRender(new_ro){
        this.render_options = new_ro;
    }

    getRender(){
        return this.render_options;
    }
}

var rend = new rendStatus();


export default rend;
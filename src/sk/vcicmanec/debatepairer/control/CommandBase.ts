export class CommandBase {

    constructor(public type:string) {

    }

    public dispatch(){
        this.execute();
    }

    public execute(){

    }
}

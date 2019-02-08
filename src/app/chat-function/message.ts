export class Message{

    public static SENDER_TYPE_USER=false;
    public static SENDER_TYPE_BOT=true;
    constructor(public message:string,public sender:boolean){}
}
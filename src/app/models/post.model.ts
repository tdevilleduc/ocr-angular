export class Post {
    loveIts: number;
    created_at: Date;
    constructor(private title: string, private content: string) {
        this.created_at = new Date();
        this.loveIts = 0;
    }
}
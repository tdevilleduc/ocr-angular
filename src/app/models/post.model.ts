export class Post {
    loveIts: number;
    created_at: number;
    constructor(private title: string, private content: string) {
        this.created_at = Date.now();
        this.loveIts = 0;
    }
}
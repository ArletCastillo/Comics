export class ComicBase {
    error: string;
    limit: number;
    results: Comic[];
}

export class Comic {
    cover_date: string;
    date_last_updated: string;
    description: string;
    issue_number: string;
    name: string;
    site_detail_url: string;
    volume: Volume;
    image: Image;
}

export class Image {
    small_url: string;
}

export class Volume {
    id: number;
    name: string;
}

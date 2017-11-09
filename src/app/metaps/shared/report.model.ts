/**
 * Created by andrei on 05.11.2017.
 */
//tslint:disable
export class Report {
  public id: number;
  public topic: string;
  public status: string;
  public created: any;
  public modified: any;
  public users: Array<{id: number, first_name: string, last_name: string, thumbs_photo: string}>;
  public materials: Array<{title: string, link: string, type: string}>;
  constructor(report) {
    this.id = report.id;
    this.topic = report.topic;
    this.status = report.status;
    this.created = report.created;
    this.modified = report.modified;
    this.users = this.createdUer(report);
    this.materials = this.createMaterials(report.materials);
  }
  private createdUer(report): Array<{id: number, first_name: string, last_name: string, thumbs_photo: string}> {
    let temp:  Array<{id: number, first_name: string, last_name: string, thumbs_photo: string}> = [];
    report.users.forEach((user) => {
      temp.push({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        thumbs_photo: user.thumbs_photo
      })
    })
    return temp;
  }
  private createMaterials(materials: any[]): Array<{title: string, link: string, type: string}> {
    let temp: Array<{title: string, link: string, type: string}> = [];
    materials.forEach((material) => {
      temp.push({
        title: material.title,
        link: material.link,
        type: material.type
      })
    })
    return temp;
  }
};
/*

[[{"Доклад модель": ""},
  {
    "id": 0,
    "topic": "tema тема",
    "status": "string",
    "created": "data_time дата создания ",
    "modified": "дата изменения доклада",
    "users": [{
      "id": 0,
      "first_name": "name",
      "last_name": "family",
      "thumbs_photo": "link on photo"
    }],
    "materials": [{
      "title": "нужно обсудить название документа",
      "link": "link on materials",
      "type": "type  file video text нужно обсудить название"
    }]
  }],
  [
    {
      "id": 0,
      "place": "string место встречи",
      "place_map_link": "url on map",
      "meeting_time": "дата и время проведения встречи",
      "title": "string",
      "create_by": {
        "id": 0,
        "first_name": "name",
        "last_name": "family",
        "thumbs_photo": "link on photo"
      },
      "reports": [
        {
          "id": 0,
          "topic": "tema тема",
          "status": "string",
          "created": "data_time дата создания ",
          "modified": "дата изменения доклада",
          "users": [{
            "id": 0,
            "first_name": "name",
            "last_name": "family",
            "thumbs_photo": "link on photo"
          }],
          "materials": [{
            "title": "нужно обсудить название документа",
            "link": "link on materials",
            "type": "type  file video text нужно обсудить название"
          }]
        }
      ]
    }
  ]]*/

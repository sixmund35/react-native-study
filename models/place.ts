import { v4 as uuidv4 } from 'uuid';

export class Place {
  title: string;
  imageUri: string;
  address: string;
  location: { lat: number; lng: number };
  id: string;

  constructor(props: { title: string; imageUri: string; address: string; location: { lat: number; lng: number } }) {
    this.title = props.title;
    this.imageUri = props.imageUri;
    this.address = props.address;
    this.location = props.location;
    this.id = uuidv4();
  }
}

// the import way in TS exactly the same as in React (ES2015)
// some pavkages may miss type definition packages(adapter betwen TS and JS), we just need to install them
// xxxx.d.ts -> type adaption file
import faker from 'faker'

export class User {
  name: string
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}

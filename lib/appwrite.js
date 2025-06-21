
import { Client, Account, Avatars, Databases} from 'react-native-appwrite';


export const client = new Client()
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6855cae0002e6ee1e185')   // Your Project ID
  .setPlatform('dev.nba2302.shelfie'); 

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)
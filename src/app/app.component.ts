import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Users } from './models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
 Users:Observable<any[]>
 constructor(private firestore:AngularFirestore){
  this.Users=firestore.collection('Users').valueChanges({idField:'eventId'});
  console.log(this.Users);
 }
 disableuser(eventId:any){
  this.firestore.collection('Users').doc(eventId).delete();
  console.log(eventId)
}

update(User: Users){

console.log(User);
if(User.disable==true){
this.firestore.collection('Users').doc(`/${User.eventId}`).update({disable: false});

}
else{
this.firestore.collection('Users').doc(`/${User.eventId}`).update({disable:true});
}
}

}

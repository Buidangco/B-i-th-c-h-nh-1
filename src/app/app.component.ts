import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  s=0;
  tong=0;
  n: any;
  x: any;
  i=0;j=0;
  t:any;
  l=1;
  Danhsach = [
    {hoten: 'Nguyen Thi Mai', diemthi:9},
    {hoten: 'Tran Thi Anh', diemthi:7.5},
    { hoten: 'Hoang Thi Dung', diemthi:8.3}
  ]
  //bai1
  tinh(sox:string,soL:string){
    for(this.i=1;this.i<=parseFloat(soL);this.i++)
    {
    this.s =this.s+Math.pow(parseFloat(sox),this.i)
    }
  }
//Bài 2

ngOnInit(): void {

}
tinh1(){
  let tmp=1;
  for(let i=1;i<=this.n;++i){
      this.tong= this.tong+ (Math.pow(-1,i))*(Math.pow(this.x,i)/Giaithua(i));
  }
}

}
function Giaithua(a: number) {
let gt=1;
for (let i = 1; i <=a; i++) {
  gt*=i;
}
return gt;

  // xapxep(){
  //   for (this.i = 1; this.i < this.Danhsach.length; this.i++) {
  //     for (this.j = 1; this.j < this.Danhsach.length; this.j++) {
  //        if (strcmp(this.Danhsach[this.j - 1], this.Danhsach[this.j]) > 0) {
  //           strcpy(this.Danhsach, this.Danhsach[this.j - 1]);
  //           strcpy(this.Danhsach[this.j - 1], this.Danhsach[this.j]);
  //           strcpy(this.Danhsach[this.j], this.Danhsach);
  //        }
  //     }
  //  }
  // }
}

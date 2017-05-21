export class FloydWarshall {
    numberofvertices    : number;
    adjacencymatrix     : number[][] = [];
    distancematrix      : number[][] = [];
    s                   : number[][] = [];
    INFINITY: number = 999;

    result(): string{
        let result ="-----------------------------------------";
        let u = 0 ,v = 0;
		for(let l=0; l< this.numberofvertices; l++){
			for(let m=0; m<this.numberofvertices; m++){
				u=l;v=m;
				if (this.distancematrix[u][v] >= this.INFINITY) {
					result += "\nKhông có dường đi";
				}
				else {
					// console.log("\nDuong di ngan nhat tu ",u," den ",v," co do dai la ",this.distancematrix[u][v]);
                    result += "\nĐường đi ngắn nhất từ đỉnh <b>"+ (u + 1)+"</b> đến <b>" + (v +1) + "</b> có độ dài là <b>" + this.distancematrix[u][v]+"</b>";
					// console.log("Duong di: ",u);//in d?nh d?u du?i d?ng char.
                    result += "\nĐường đi: <b>"+ (u+1) +"</b>" ;
					while (u != v) {
						// console.log("->",this.s[u][v]);//in ra du?ng di du?i d?ng char.
                        result += ("-><b>"+ (this.s[u][v]+1)+"</b>");
						u = this.s[u][v];
					}
				}
                result+="\n-----------------------------------------";
			}
        }
        return result;
    }
}
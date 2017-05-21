export class JohnsonsAlgorithm {
    numberofvertices    : number;
    adjacencymatrix     : number[][] = [];
    distancematrix      : number[][] = [];
    augmentedMatrix :number[][] = [];
    allPairShortestPath :number[][] = [];
    INFINITY: number = 999;

    result(): string{
        let result ="-----------------------------------------";
        let u = 0 ,v = 0;
		result+="\n";
        for (u = 1; u<= this.numberofvertices; u++)
        {
            result+="\t"+u;
        }
        result+="\n";
        for (u = 0; u < this.numberofvertices; u++)
        {
            result+=u+"\t";
            for (v = 0; v < this.numberofvertices; v++)
            {
                result+=this.allPairShortestPath[u][v]+ "\t";
            }
            result+="\n"
        }
        return result;
    }
}
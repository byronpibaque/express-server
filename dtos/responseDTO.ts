class responseDTO {
   public code:number;
   public messaje: string;
   public data: object;
   
   constructor(code?:number,messaje?:string,data?:object){
    this.code = code || 0 ;
    this.messaje = messaje ||'';
    this.data = data || {null:null} ;
   }

} 
export default responseDTO;
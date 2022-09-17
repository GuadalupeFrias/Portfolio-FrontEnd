export interface Portfolio{
     name?:string;
    
        home:[
            {
                nombre: string;
                apellido:string;
            }
        ]
   
        
        
            education: 
                {
                    Institucion: string;
                    Anio: number;
                    Titulo:string;
                    
                }
               
            ,
            
            experience: 
                {
                    Institucion: string;
                    Anio: number;
                    Titulo:string;
                    
                }
            ,
            
            proyects: 
                {
                    Proyecto: string;
                    Anio: number;
                    Descripcion:string;
                    
                }
            ,
            
            skills: 
                {
                    Skill: string;
                    Percentage: number;
                   
                    
                }
              
        
        
        
        }
    
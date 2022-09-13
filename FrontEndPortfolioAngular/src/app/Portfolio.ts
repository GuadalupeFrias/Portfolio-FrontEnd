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
                    Institución: string;
                    Año: number;
                    Título:string;
                    
                }
               
            ,
            
            experience: 
                {
                    Institución: string;
                    Año: number;
                    Título:string;
                    
                }
            ,
            
            proyects: 
                {
                    Institución: string;
                    Año: number;
                    Título:string;
                    
                }
            ,
            
            skills: 
                {
                    Skill: string;
                    Percentage: number;
                   
                    
                }
              
        
        
        
        }
    
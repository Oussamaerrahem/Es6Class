class  Human{ 
    name; 
job; 
skills; 
constructor() {
    name='';
job='';
skills= [];
}

getJob(a)
{
this.job = a;
}
leaveJob()
{
    this.job="unployed";
}
learnNewSkill(c)
{
  this.skills.push(c)
}
forgetSkill(c)
{
this.skills= this.skills.filter(a => a != c)
}
}

class Student extends Human {
} 
    me = new Student();

    me.getJob("Web developer");
    
    me.learnNewSkill("React");
    
    me.forgetSkill("React");
    
    me.leaveJob();
    
    
    

   


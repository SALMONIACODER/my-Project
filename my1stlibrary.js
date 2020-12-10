function hasCollided(object1,object2){
    object1RightEdge=object1.x+object1.width;
    object2LeftEdge=object2.x;
    if(object1RightEdge>=object2LeftEdge){
        return true

        //console.log(object1)
    }                                                                                                   
    return false;
}
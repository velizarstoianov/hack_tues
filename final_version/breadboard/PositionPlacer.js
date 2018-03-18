function PositionPlacer(dropEvent){
    let dropedX = Number(dropEvent.offset.left.toFixed()) + 100;
    let dropedY = Number(dropEvent.offset.top.toFixed()) - 375;

    let rectangleCoordinations = {
        y : [350,390,430,470,510,550],
        x : [398,438,478,518,558,598,638,678,718]
    }
    
    let boardBorder = {
        x1: 356,
        x2: 800,
        y1: 300,
        y2: 600
    }

    this.getClosestCoordination = function(){
        let closestCoordination = { };
        closestCoordination.x = getClosestX();
        closestCoordination.y = getClosestY();

        return closestCoordination;
    }

    let getClosestX = function(){
        if(dropedX > boardBorder.x1 && dropedX < boardBorder.x2){
            let closestX = { };
            closestX.value = rectangleCoordinations.x[0];
            if(dropedX > rectangleCoordinations.x[0]){
                closestX.difference = dropedX - rectangleCoordinations.x[0];
            }else{
                closestX.difference = rectangleCoordinations.x[0] - dropedX;
            }
            rectangleCoordinations.x.forEach(function(x){
                if(dropedX - x > 0){
                    if (dropedX - x < closestX.difference){
                        closestX.difference = dropedX - x;
                        closestX.value = x;
                    }
                }else if(dropedX - x < 0){
                    if (x - dropedX < closestX.difference){
                        closestX.difference = x - dropedX;
                        closestX.value = x;
                    }
                }else{
                    closestX.difference = 0;
                    closestX.value = x;
                }
            });

            return closestX.value;
        }
        return null;
    }

    let getClosestY = function(y){
        if(dropedY > boardBorder.y1 && dropedY < boardBorder.y2){
            let closestY = { };
            closestY.value = rectangleCoordinations.y[0];
            if(dropedY > rectangleCoordinations.y[0]){
                closestY.difference = dropedY - rectangleCoordinations.y[0];
            }else{
                closestY.difference = rectangleCoordinations.y[0] - dropedY;
            }
            rectangleCoordinations.y.forEach(function(y){
                if(dropedY - y > 0){
                    if (dropedY - y < closestY.difference){
                        closestY.difference = dropedY - y;
                        closestY.value = y;
                    }
                }else if(dropedY - y < 0){
                    if (y - dropedY < closestY.difference){
                        closestY.difference = y - dropedY;
                        closestY.value = y;
                    }
                }else{
                    closestY.difference = 0;
                    closestY.value = y;
                }
            });

            return closestY.value;
        }
        return null;
    }

}
import React, {useEffect, useState} from 'react'
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const MonthlySalary = 5000;
const expenses = [100, 50, 1000, 400]
const maxHeight = 500;
const maxWidth = 100;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const getHeightPercentages = () => {
  var percentages = []
  var startingPoint = 0
  for(var expense of expenses) {
    const percent = expense / MonthlySalary
    const acc = percent * maxHeight
    percentages.push({position: startingPoint, length: acc})
    startingPoint += acc
  }

  var remainingBudget = maxHeight - startingPoint
  percentages.push({position: startingPoint, length: remainingBudget})
  return percentages;
}

const red = "red"
const blue = "blue"
var color = true
const BudgetBar = () => {
    const [percent, setPercent] = useState([])
    useEffect(() => {
        var percentages = getHeightPercentages();
        console.log("Percentage: ", percentages)
        setPercent(percentages)
    }, [])
    return (
        <Stage width={100} height={500}>
            <Layer>
            {percent && percent.map(height => {
                var changeColor = color ? 'red' : blue
                color = !color
                return (
                    <Rect
                        x={0}
                        y={height.position}
                        width={100}
                        height={height.length}
                        fill={changeColor}
                        shadowBlur={10}
                    />
                )
            })}
            </Layer>
        </Stage>
    )
}

export default BudgetBar
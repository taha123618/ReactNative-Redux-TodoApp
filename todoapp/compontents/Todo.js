import { useState } from 'react'
import { Text, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TextInput } from 'react-native-paper';
import { addtodo, deletetodo, removetodo } from '../Action/index'


const Todo = () => {

    const [todo, setTodo] = useState('')
    const list = useSelector(state => state.todo.list)
    const dispatch = useDispatch()
    return (
        <View>
            <Text>Todo App</Text>
            <TextInput
                mode="outlined"
                label="Outlined input"
                placeholder="Add todo"
                right={<TextInput.Affix text="/100" />}
                value={todo} onChange={(e) => setTodo(e.target.value)}
            />
            {/* Add  */}
            <Button onPress={() => dispatch(addtodo(todo),
                setTodo(''))} >
                ADD
            </Button>


            {/* delete */}
            <div>
                {
                    list.map((elem) => {
                        return (
                            <div key={elem.id}>
                                <h3>{elem.data}</h3>
                                <Button onPress={() => dispatch(deletetodo(elem.id))} >
                                    DELETE
                                </Button>
                            </div>
                        )

                    })
                }
            </div>

            {/* remove  */}
            <Button onPress={() => dispatch(removetodo())} >
                REMOVE ALL
            </Button>

        </View>

    )
}

export default Todo

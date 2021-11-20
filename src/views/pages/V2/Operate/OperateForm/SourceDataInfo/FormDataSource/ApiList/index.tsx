import { FunctionComponent } from "react";
import UserList from './APIListGroup'


interface ApiListProps {}

interface ApiListComponent extends FunctionComponent<ApiListProps>{}

const ApiList:ApiListComponent=()=> {

    const listItemData = [
            {
                label: 'API Khách hàng',
                code: '1'
            },
            {
                label: 'API TÀI KHOẢN',
                code: '2'
            }
    ]
    return (
        <UserList labelName="Số lượng" listItem={listItemData}/>
    )
}

export default ApiList

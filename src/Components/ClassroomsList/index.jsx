import ClassroomCard from '../ClassroomCard'
import './index.scss'

export default function ClassroomsList ({items}) {
    return (
        <div className='classrooms-list'>
            {items.map(item => (
                <ClassroomCard
                    key={item.id}
                    header={item.theme}
                    title={item.name}
                    subTitle={item.part}
                    actionTitle='Detail'
                />
            ))}
        </div>)
}
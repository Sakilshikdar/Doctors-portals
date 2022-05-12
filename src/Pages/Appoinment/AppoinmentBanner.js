
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({day, setDay}) => {
    
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-[594px] sm:w-full lg:ml-44
                sm:ml-0 rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={day}
                        onSelect={setDay}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
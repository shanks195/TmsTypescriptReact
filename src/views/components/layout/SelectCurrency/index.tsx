import { FC } from 'react';
import Select from 'views/components/base/Select';
import { RiDatabase2Fill } from 'react-icons/ri';

const SelectCurrency: FC = () => {

  return <Select
    fullWidth={ false }
    className="mr-6"
    value="VND"
    options={[
      { 
        value: 'VND', 
        label: <div className="currency-item">
          <RiDatabase2Fill />
          <span>VND</span>
        </div>
      },
      {
        value: 'USD', 
        label: <div className="currency-item">
          <RiDatabase2Fill />
          <span>USD</span>
        </div>
      },
      {
        value: 'EUR', 
        label: <div className="currency-item">
          <RiDatabase2Fill />
          <span>EUR</span>
        </div>
      },
    ]}
  />

}

export default SelectCurrency;
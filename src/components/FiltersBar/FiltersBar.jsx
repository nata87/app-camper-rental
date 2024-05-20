import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setLocation as dispatchLocation } from 'store/filtersSlice';

import { ReactComponent as Transmission } from '../../icons/transmission.svg';
import { ReactComponent as Tv } from '../../icons/tv.svg';
import { ReactComponent as Kitchen } from '../../icons/kitchen.svg';
import { ReactComponent as Shover } from '../../icons/shover.svg';
import { ReactComponent as Climat } from '../../icons/wind.svg';
import { ReactComponent as Aalcon } from '../../icons/campVan.svg';
import { ReactComponent as Van } from '../../icons/campValcon.svg';
import { ReactComponent as Integ } from '../../icons/campInteg.svg';
import { ReactComponent as Microwave } from '../../icons/microwave.svg';
import { ReactComponent as Hob } from '../../icons/hob.svg';
import { ReactComponent as Freezer } from '../../icons/freezer.svg';
import { ReactComponent as Radio } from '../../icons/radio.svg';
import { ReactComponent as Map } from '../../icons/map.svg';

import styles from './FiltersBar.module.css';

const FiltersBar = () => {
  const dispatch = useDispatch();

  const initialStateLocation = '';
  const initialStateTransmission = {
    transmission: false,
  };

  const initialStateDetails = {
    airConditioner: false,
    kitchen: false,
    TV: false,
    shower: false,
    microwave: false,
    hob: false,
    freezer: false,
    radio: false,
  };
  const initialStateForm = {
    vehicleType: '',
  };

  const [location, setLocation] = useState(initialStateLocation);

  const [transmission, setTransmission] = useState(initialStateTransmission);

  const [details, setDetails] = useState(initialStateDetails);

  const [form, setForm] = useState(initialStateForm);

  const handleChangeLocation = e => {
    setLocation(e.target.value);
  };

  const handleChangeTransmision = e => {
    const { name, checked } = e.target;
    setTransmission({ ...transmission, [name]: checked });
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setDetails({ ...details, [name]: checked });
  };

  const handleVehicleTypeChange = e => {
    const { value } = e.target;
    setForm({ ...form, vehicleType: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(dispatchLocation(location));
  };

  return (
    <div className={styles.barApp}>
      <form>
        <div>
          <label className={styles.barName}>Location</label>
          <span className={styles.mapsWrap}>
            <input
              className={styles.input}
              value={location}
              onChange={handleChangeLocation}
              required
              placeholder="City"
            />
            <Map className={styles.map} />
          </span>
        </div>

        <div>
          <h2 className={styles.barName}>Filters</h2>
          <p className={styles.nameFilter}>Vehicle equipment</p>
          <hr />

          <ul className={styles.vehicleOptionsList}>
            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name="airConditioner"
                  checked={details.airConditioner}
                  onChange={handleCheckboxChange}
                  data-checked={!!details.airConditioner}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (details.airConditioner ? styles.checked : '')
                  }
                  checked={details.airConditioner}
                >
                  <Climat style={{ width: '32', height: '32' }} />
                  AC
                </span>
              </label>
            </li>

            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name="transmission"
                  checked={transmission.transmission}
                  onChange={handleChangeTransmision}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (details.transmission ? styles.checked : '')
                  }
                  checked={transmission.transmission}
                >
                  <Transmission style={{ width: '32', height: '32' }} />
                  Automatic
                </span>
              </label>
            </li>

            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name="kitchen"
                  checked={details.kitchen}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (details.kitchen ? styles.checked : '')
                  }
                  checked={details.kitchen}
                >
                  <Kitchen style={{ width: '32', height: '32' }} />
                  Kitchen
                </span>
              </label>
            </li>

            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name="TV"
                  checked={details.TV}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (details.TV ? styles.checked : '')
                  }
                  checked={details.TV}
                >
                  <Tv style={{ width: '32', height: '32' }} />
                  TV
                </span>
              </label>
            </li>

            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name="shower"
                  checked={details.shower}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (details.shower ? styles.checked : '')
                  }
                  checked={details.shower}
                >
                  <Shover style={{ width: '32', height: '32' }} />
                  Shower/WC
                </span>
              </label>
            </li>

            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name="microwave"
                  checked={details.microwave}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (details.microwave ? styles.checked : '')
                  }
                  checked={details.microwave}
                >
                  <Microwave style={{ width: '32', height: '32' }} />
                  Microwave
                </span>
              </label>
            </li>

            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name="hob"
                  checked={details.hob}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (details.hob ? styles.checked : '')
                  }
                  checked={details.hob}
                >
                  <Hob style={{ width: '32', height: '32' }} />
                  Hob
                </span>
              </label>
            </li>

            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name="freezer"
                  checked={details.freezer}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (details.freezer ? styles.checked : '')
                  }
                  checked={details.freezer}
                >
                  <Freezer style={{ width: '32', height: '32' }} />
                  Freezer
                </span>
              </label>
            </li>

            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  name="radio"
                  checked={details.radio}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (details.radio ? styles.checked : '')
                  }
                  checked={details.radio}
                >
                  <Radio style={{ width: '32', height: '32' }} />
                  Radio
                </span>
              </label>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.nameFilter}>Vehicle type</p>
          <hr />
          <ul className={styles.vehicleTypeList}>
            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="radio"
                  name="vehicleType"
                  value="panelTruck"
                  checked={form.vehicleType === 'panelTruck'}
                  onChange={handleVehicleTypeChange}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (form.vehicleType === 'panelTruck' ? styles.checked : '')
                  }
                  checked={form.vehicleType === 'panelTruck'}
                >
                  <Van style={{ width: '40px', height: '28px' }} />
                  Van
                </span>
              </label>
            </li>

            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="radio"
                  name="vehicleType"
                  value="fullyIntegrated"
                  checked={form.vehicleType === 'fullyIntegrated'}
                  onChange={handleVehicleTypeChange}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (form.vehicleType === 'fullyIntegrated'
                      ? styles.checked
                      : '')
                  }
                  checked={form.vehicleType === 'fullyIntegrated'}
                >
                  <Integ style={{ width: '40px', height: '28px' }} />
                  Fully Integrated
                </span>
              </label>
            </li>

            <li>
              <label className={styles.checkboxWrapper}>
                <input
                  className={styles.checkboxInput}
                  type="radio"
                  name="vehicleType"
                  value="alcove"
                  checked={form.vehicleType === 'alcove'}
                  onChange={handleVehicleTypeChange}
                />
                <span
                  className={
                    styles.checkboxCheckmark +
                    ' ' +
                    (form.vehicleType === 'alcove' ? styles.checked : '')
                  }
                  checked={form.vehicleType === 'alcove'}
                >
                  <Aalcon
                    style={{ width: '40px', height: '28px', fill: '#101828' }}
                  />
                  Alcove
                </span>
              </label>
            </li>
          </ul>
        </div>

        <div className={styles.wrapperButton}>
          <button
            className={styles.button}
            type="submit"
            size="large"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FiltersBar;

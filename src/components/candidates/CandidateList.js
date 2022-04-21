import React, { useState, useEffect, lazy } from 'react';
// import useOnclickOutside from 'react-cool-onclickoutside';
import CandidateDetailsModal from '../modals/candidate-details-modal.js';
import ConfirmModal from '../modals/confirm-modal.js';
import Avatar from '../../assets/img/avatar.svg';
import VerticalDotIcon from '../../assets/img/icons/vertical-dot-icon.svg';
import MailIcon from '../../assets/img/icons/mail-icon.svg';
import PhoneIcon from '../../assets/img/icons/phone-icon.svg';
import LocationIcon from '../../assets/img/icons/location.svg';
import EditIcon from '../../assets/img/icons/edit.svg';
import DeleteIcon from '../../assets/img/icons/delete.svg';
import Axios from 'axios';
import PlusIcon from '../../assets/img/icons/plus-icon.svg';
import EditModal from '../edit-modal/index.js';

import './Candidates.scss';

const CandidateList = (props) => {
  // const token = shield.tokenStore.getToken()
  const [hasDetailsModal, setHasDetailsModal] = useState(false);
  const [hasConfirmModal, setHasConfirmModal] = useState(false);
  const [actionDropdown, setActionDropdown] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [candidateNewModal, setCandidateNewModal] = useState(false);
  const [current, setCurrent] = useState(null);
  // const actionDropContainer = useOnclickOutside(() => {
  //   setActionDropdown(null);
  // });
  const handleActionDropdown = (id) => {
    if (id === actionDropdown) {
      setActionDropdown(null);
    } else {
      setActionDropdown(id);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading(true);
    try {
      const response = await Axios.post(
        `https://hiringapp-dev-functions.appblox.io/listCandidates`
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
      response?.data?.data && setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setData([]);
    }
  };

  const onDelete = async () => {
    try {
      await Axios.post(
        `https://hiringapp-dev-functions.appblox.io/removeCandidate`,
        {
          id: selected,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
      setSelected(null);
      setHasConfirmModal(false);
      getData();
    } catch (error) {
      console.log(error);
      setSelected(null);
      setHasConfirmModal(false);
    }
  };

  return (
    <div>
      <div className='float-left flex w-full justify-between'>
        <div className='text-lg font-bold md:text-xl'>All Candidates</div>
        <button
          type='button'
          onClick={() => setCandidateNewModal(true)}
          className='flex items-center rounded-lg bg-[#0C5DFF] py-2 px-4 text-sm font-bold text-white hover:bg-[#0A4ACC] focus:outline-none md:text-base'
        >
          <img className='mr-2.5' src={PlusIcon} alt='' />
          Add New Candidate
        </button>
      </div>
      {!loading ? (
        <div>
          {' '}
          <div className='float-left mt-5 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {data?.map((item) => (
              <div
                onClick={() => setHasDetailsModal(true)}
                key={item.id}
                className='float-left w-full cursor-pointer rounded-2xl bg-white p-4 shadow-md transition-shadow duration-500 hover:shadow-none'
              >
                <div className='flex w-full items-center justify-between'>
                  <div className='flex flex-grow items-center overflow-hidden'>
                    <div className='flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200'>
                      <img className='max-w-full' src={Avatar} alt=''></img>
                    </div>
                    <div className='w-full overflow-hidden pl-2.5 pr-2 text-black'>
                      <p className='truncate text-base font-bold'>
                        {`${item.firstName} ${item.lastName}`}
                      </p>
                      <p className='truncate text-sm leading-tight'>
                        {item.experience}
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className='relative flex-shrink-0'
                    // ref={actionDropContainer}
                  >
                    <img
                      onClick={() => handleActionDropdown(item)}
                      className='cursor-pointer'
                      src={VerticalDotIcon}
                      alt=''
                    />
                    <div
                      className={`absolute top-full right-2 z-10 mt-1 ${
                        actionDropdown === item ? '' : 'hidden'
                      }`}
                    >
                      <div className='border-primary float-left min-w-[84px] overflow-hidden rounded-lg border bg-white shadow-lg'>
                        <div className='float-left w-full py-1 text-sm'>
                          <ul>
                            <li
                              className='flex w-full cursor-pointer items-center px-3 py-1 text-xs leading-tight hover:bg-[#F6F8FA]'
                              onClick={() => {
                                setCandidateNewModal(true);
                                setCurrent(item);
                                setActionDropdown(null);
                              }}
                            >
                              <img className='mr-1.5' src={EditIcon} alt='' />{' '}
                              Edit
                            </li>
                            <li
                              onClick={() => {
                                setSelected(item.id);
                                setHasConfirmModal(true);
                                setActionDropdown(null);
                              }}
                              className='flex w-full cursor-pointer items-center px-3 py-1 text-xs leading-tight hover:bg-[#F6F8FA]'
                            >
                              <img className='mr-1.5' src={DeleteIcon} alt='' />
                              Delete
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-3 w-full'>
                  <div className='mt-1 flex w-full items-center'>
                    <img className='mr-1' src={MailIcon} alt='' />
                    <p className='truncate text-sm'>{item.emailID}</p>
                  </div>
                  <div className='mt-1 flex w-full items-center'>
                    <img className='mr-1' src={PhoneIcon} alt='' />
                    <p className='truncate text-sm'>{item.phone}</p>
                  </div>
                  <div className='mt-1 flex w-full items-center'>
                    <img className='mr-1' src={LocationIcon} alt='' />
                    <p className='truncate text-sm'>
                      {item.preferredJobLocation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CandidateDetailsModal
            hasDetailsModal={hasDetailsModal}
            handleDetailsModal={() => setHasDetailsModal(false)}
          />
          <ConfirmModal
            hasConfirmModal={hasConfirmModal}
            handleConfirmModal={() => setHasConfirmModal(false)}
            onConfirm={onDelete}
          />
          <EditModal
            candidateNewModal={candidateNewModal}
            current={current}
            handleCandidateNewModal={() => {
              setCandidateNewModal(false);
              setCurrent(null);
              getData();
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CandidateList;

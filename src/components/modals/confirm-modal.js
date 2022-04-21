import React from 'react';
import CloseIcon from '../../assets/img/icons/close-icon-modal.svg';
const ConfirmModal = (props) => {
  const { hasConfirmModal, handleConfirmModal, onConfirm } = props;
  return (
    <>
      <div
        onClick={() => {
          handleConfirmModal();
        }}
        className={`fixed left-0 top-0 z-[999] h-full w-full bg-black/40 ${
          hasConfirmModal ? 'fadeIn' : 'hidden'
        }`}
      ></div>
      <div
        className={`transition-max-width absolute top-1/2 left-1/2 z-[1000] w-full max-w-sm -translate-x-1/2 -translate-y-1/2 transform px-4 duration-200 ${
          hasConfirmModal ? '' : 'hidden'
        }`}
      >
        <div className='relative float-left w-full rounded-md bg-white py-4 px-6'>
          <div className='mb-1 flex w-full justify-end'>
            <img
              className='cursor-pointer'
              onClick={() => {
                handleConfirmModal();
              }}
              src={CloseIcon}
              alt='Close'
            ></img>
          </div>
          <div className='float-left mb-5 w-full'>
            <div className='text-gray-dark text-xl font-bold'>
              Delete Candidate?
            </div>
            <p className='mt-4 text-sm text-[#012040]'>
              Are you sure you want to delete this record? This process cannot
              be undone.
            </p>
          </div>
          <div className='float-left my-2 flex w-full items-center justify-end md-lt:flex-wrap'>
            <button
              onClick={() => {
                handleConfirmModal();
              }}
              type='button'
              className='ml-2 h-12 flex-shrink-0 rounded-md border-none px-5 text-base font-semibold text-[#586069] first-of-type:ml-0 hover:bg-[#F6F8FA] focus:outline-none'
            >
              Cancel
            </button>
            <button
              type='button'
              className='group ml-2 flex h-12 flex-shrink-0 items-center rounded-md border border-[#CB2431] bg-[#DD5147] px-5 text-base font-semibold text-white transition-all first-of-type:ml-0 hover:bg-[#CB2431] focus:outline-none'
              onClick={onConfirm}
            >
              <svg
                className='mr-2'
                width='17'
                height='18'
                viewBox='0 0 17 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.6665 4.00033H16.8332V5.66699H15.1665V16.5003C15.1665 16.7213 15.0787 16.9333 14.9224 17.0896C14.7661 17.2459 14.5542 17.3337 14.3332 17.3337H2.6665C2.44549 17.3337 2.23353 17.2459 2.07725 17.0896C1.92097 16.9333 1.83317 16.7213 1.83317 16.5003V5.66699H0.166504V4.00033H4.33317V1.50033C4.33317 1.27931 4.42097 1.06735 4.57725 0.91107C4.73353 0.75479 4.94549 0.666992 5.1665 0.666992H11.8332C12.0542 0.666992 12.2661 0.75479 12.4224 0.91107C12.5787 1.06735 12.6665 1.27931 12.6665 1.50033V4.00033ZM13.4998 5.66699H3.49984V15.667H13.4998V5.66699ZM9.67817 10.667L11.1515 12.1403L9.97317 13.3187L8.49984 11.8453L7.0265 13.3187L5.84817 12.1403L7.3215 10.667L5.84817 9.19366L7.0265 8.01533L8.49984 9.48866L9.97317 8.01533L11.1515 9.19366L9.67817 10.667ZM5.99984 2.33366V4.00033H10.9998V2.33366H5.99984Z'
                  className='fill-white'
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;

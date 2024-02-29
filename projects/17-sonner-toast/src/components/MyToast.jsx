import { Toaster, toast } from 'sonner';

function MyToast() {
    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));
  return <div>
    
    <button onClick={() => toast.success('Succes')}>Success</button>
    <button onClick={() => toast.error('Error')}>Error</button>
    <button onClick={() => {toast('My cancel toast', {
  cancel: {
    label: 'Cancel',
    onClick: () => console.log('Cancel!'),
  },
});}}>Cancel</button>

<button onClick={() => {toast('My action toast', {
  action: {
    label: 'Action',
    onClick: () => console.log('Action!'),
  },
});}}>Action</button>
    <button onClick={() => {toast.promise(promise, {
  loading: 'Loading...',
  success: (data) => {
    return `${data.name} toast has been added`;
  },
  error: 'Error',
});}}>Promise</button>
    <Toaster richColors position='top-right' closeButton theme='dark'/>
    </div>

}

export default MyToast
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useRef } from 'react';

const Description = ({ value, onChange }) => {
  const timeoutRef = useRef(null);

  return (
    <div className="border-2 border-white/10 focus-within:border-[#d2ff2f] transition">
      
      {/* Editor */}
      <CKEditor
        editor={ClassicEditor as any}
        data={value || ''}
        config={{
          toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'undo',
            'redo'
          ]
        }}
        onChange={(event, editor) => {
          const data = editor.getData();

          // 🔥 debounce (smooth typing)
          if (timeoutRef.current) clearTimeout(timeoutRef.current);

          timeoutRef.current = setTimeout(() => {
            onChange(data);
          }, 300);
        }}
      />
    </div>
  );
};

export default Description;
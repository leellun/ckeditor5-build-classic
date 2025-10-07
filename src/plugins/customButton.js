import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from './theme/icons/imageUpload.svg';
// import imageIcon from '!!raw-loader!./theme/icons/imageUpload.svg';  
export default class CustomButton extends Plugin {
    static get pluginName() {
        return 'CustomButton';
    }

    init() {
        const editor = this.editor;

        // 注册按钮
        editor.ui.componentFactory.add('customButton', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: '上传图片',
                tooltip: true,
                withText: false,
                icon: imageIcon
            });


            // 点击按钮时触发事件
            view.on('execute', () => {
                // 这里不写逻辑，第三方可监听 editor 事件
                editor.fire('customButtonClicked');
            });

            return view;
        });
    }
}

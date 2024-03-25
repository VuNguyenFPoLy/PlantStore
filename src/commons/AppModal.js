import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import Style from '../style/AppStyle';

const AppModal = (props) => {

    const { title, content, resolveContent, rejectContent, style } = props;

    return (
        <Modal>
            <View>
                <View style={getStyleContainerContent()}>
                    {title && <Text style={style.title}>{title}</Text>}
                    {content && <Text style={style.content}>{content}</Text>}
                    <View>
                        {resolveContent &&
                            <TouchableOpacity style={style.resolve}>
                                <Text style={style.txtResolve}>{resolveContent}</Text>
                            </TouchableOpacity>}

                        {rejectContent && 
                        <TouchableOpacity style={style.reject}>
                            <Text style={style.txtReject}>{rejectContent}</Text>
                        </TouchableOpacity>}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AppModal

var getStyleContainerContent = () => {
    return {
        ...Style.borderRadius8px,
        ...Style.backgroundColorWhite,
        ...Style.alignItemsCenter,
        ...Style.justifyContentCenter,
        ...Style.padding24,

    }
}
import { defineComponent } from 'vue'

export default defineComponent({


    render() {
        return (
            <div>
                Special: {this.$slots.special?.() || 'No Special'}
                <br/>
                Default: {this.$slots.default?.(Date.now()) || ''}
            </div>
        )
    },
})

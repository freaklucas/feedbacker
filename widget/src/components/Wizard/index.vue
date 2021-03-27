<template>
    <component
        :is="store.currentComponent"
        @select-feedback-type="handleSelectFeedbackType"
        @next=""
    />
</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useStore from '../../hooks/store.ts'
import useNavigation, { Navigation } from '../../hooks/navigation.ts'
import { StoreState, setFeedbackType } from '../../store'

interface SetupReturn {
    store: StoreState;
    next: Navigation['next'];
    handleSelectFeedbackType(type: string): void;

}
export default defineComponent({

  setup (): SetupReturn {
    const store = useStore()
    const { next } = useNavigation()

    function handleSelectFeedbackType (type: string): void {
      SelectFeedbackType(type)
    }
    return {
      store,
      next,
      handleSelectFeedbackType
    }
  }
})

</script>

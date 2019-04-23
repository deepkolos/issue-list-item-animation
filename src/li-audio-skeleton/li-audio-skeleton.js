const TYPE_OPTIONS = ['audio', 'broadcast']
const BADGE_TYPE_OPTIONS = ['free', 'charge', 'preview', 'rerun', 'living']

const BADGE_TEXT_MAP = {
  free: '免费',
  rerun: '重播',
  charge: '付费',
  living: '直播',
  preview: '试听',
}

export default {
  props: {
    disable: Boolean,
    playing: Boolean,
    loading: Boolean,
    skeleton: Boolean,

    time: String,
    title: String,
    period: String,
    duration: String,
    playNum: [String, Number],

    badgeType: {
      type: String,
      validator: i => BADGE_TYPE_OPTIONS.includes(i),
    },
    type: {
      type: String,
      validator: i => TYPE_OPTIONS.includes(i),
    },
  },

  onInit() {
    this.badgeTextMap = BADGE_TEXT_MAP
  },
}

import persistedStore from '@ekwoka/persistedstore'
import RIAS from '@ekwoka/x-rias'
import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'

const RIASconfig = {
    key: 'dmaoqyvwt',
    autoSize: true
}

export default Plugins = [persistedStore,intersect,collapse,RIAS(RIASconfig)]
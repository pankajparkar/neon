import { types } from 'mobx-state-tree'
import * as actions from './ipc.actions'
import { EventEmitter } from 'events'

/**
 * Handles IPC state
 */
export const IpcStoreModel = types
  .model('IpcStore')
  .volatile(self => ({
    // @ts-ignore
    ipcRenderer: process.env.NODE_ENV ? window.ipcRenderer : new EventEmitter()
  }))
  .actions(self => ({
    listen: async (event: string, callback: any): Promise<any> =>
      await actions.listen(self, event, callback),
    send: async (event: string, listenTo: string, payload: any): Promise<any> =>
      await actions.send(self, event, listenTo, payload),
    sendIpc: async (event: string, listenTo: string, method: string, body: any): Promise<boolean> =>
      await actions.sendIpc(self, event, listenTo, method, body),
    setRenderer (value: any) {
      self.ipcRenderer = value
    }
  }))

/**
 * An instance of a IpcStore.
 */
export type IpcStore = typeof IpcStoreModel.Type

/**
 * The serialized version of a `IpcStore` often used when acquiring
 * data from an API (for example).
 */
export type IpcStoreSnapshot = typeof IpcStoreModel.SnapshotType

import BaseMessageParams, { IMessageParams as IBaseMessageParams } from '../MessageParams';
import { ILocation } from '../common-types';
import { RideHailingMissionStatus } from '../common-enums';

/**
 * @interface IMessageParams extends The base interface IMessageParams for ride hailing protocol for OnTheWay message only.
 */
interface IMessageParams extends IBaseMessageParams {
    /**
     * @property Last vehicle location.
     */
    vehicleLocation: ILocation;
}

/**
 * @class The Class ride-hailing/MessageParams represent the parameters of ride-hailing message for OnTheWay message only.
 */
export default class MessageParams extends BaseMessageParams {

    private static _protocol = 'ride_hailing';
    private static _type = 'vehicleLocationMessage';

    public missionStatus: RideHailingMissionStatus;
    public vehicleLocation: ILocation;

    public static getMessageType(): string {
        return `${this._protocol}:${this._type}`;
    }

    public static fromJson(json: any): MessageParams {
        return new MessageParams(json);
    }

    constructor(values: Partial<IMessageParams>) {
        super(values, MessageParams._protocol, MessageParams._type);
        this.vehicleLocation = values.vehicleLocation;
        this.missionStatus = RideHailingMissionStatus.OnTheWay;
    }
}

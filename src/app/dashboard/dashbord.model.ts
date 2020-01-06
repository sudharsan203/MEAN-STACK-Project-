import { VehiclePageModule } from '../vehicle/vehicle.module';

export interface Product
{
    id: number,
    name: string,
    type: string,
    image:string,
    price: number,
    kb_part_no: string,
    am_part_no: string,
    oem_part_no: string,
    fr_rr: string,
    functions: string,
    features: string,
    install_location:string, 
    
}
export interface Vehicle
{
    id:number,
    name:string,
    type:string,
    image:string,
    company:Company
}
export interface Company
{
    id:number,
    name:string,
    logo:string
}
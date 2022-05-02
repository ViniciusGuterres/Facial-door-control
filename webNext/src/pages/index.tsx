import React from "react";

// Components
import Layout from '../components/Layout';

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faDoorOpen, faPercent, faUsers } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <Layout>
      <div className="flex gap-4 w-full p-5">
        <InfoCard
          data={'23,5'}
          icon={faDoorOpen}
          bgColor={'#12762a'}
          percents={13.4}
          title={'Acessos diários'}
        />

        <InfoCard
          data={'23,5'}
          icon={faLock}
          bgColor={'#ff0000b5'}
          percents={13.4}
          title={'Acessos bloqueados'}

        />

        <InfoCard
          data={'23,5'}
          icon={faUsers}
          percents={13.4}
          bgColor={'#00ffeea1'}
          title={'Total de colaboradores'}
        />

        <InfoCard
          data={'23,5'}
          icon={faPercent}
          percents={13.4}
          bgColor={'#ffff00a1'}
          title={'Acessos semanais'}
        />
      </div>
    </Layout>
  )
}

function InfoCard(props) {

  return (
    <div className="pl-5 pt-5 pb-2 bg-gray-900 w-1/3	h-36 text-white rounded-2xl">
      {/* Icons */}
      <div
        className="rounded-full w-9 h-9 flex items-center justify-center"
        style={{ backgroundColor: props.bgColor }}
      >
        <FontAwesomeIcon
          icon={props.icon}
          className='text-xl'
        />
      </div>

      {/* Datas amount */}
      <div className="text-white h-8 flex gap-3 mt-3">
        <h1 className="text-2xl">
          {props.data}
        </h1>

        <span className="h-full text-sm">
          {props.percents} %
        </span>
      </div>

      {/* Title card */}
      <div>
        <h1>
          {props.title}
        </h1>
      </div>
    </div>
  )
}
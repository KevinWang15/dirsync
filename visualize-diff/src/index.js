import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);


window.getData = () => {
    if (window['DATA']) {
        return window['DATA'];
    } else {
        return {
            "copy": [
                ".git/COMMIT_EDITMSG",
                ".git/HEAD",
                ".git/config",
                ".git/description",
                ".git/hooks/applypatch-msg.sample",
                ".git/hooks/commit-msg.sample",
                ".git/hooks/fsmonitor-watchman.sample",
                ".git/hooks/post-update.sample",
                ".git/hooks/pre-applypatch.sample",
                ".git/hooks/pre-commit.sample",
                ".git/hooks/pre-merge-commit.sample",
                ".git/hooks/pre-push.sample",
                ".git/hooks/pre-rebase.sample",
                ".git/hooks/pre-receive.sample",
                ".git/hooks/prepare-commit-msg.sample",
                ".git/hooks/push-to-checkout.sample",
                ".git/hooks/update.sample",
                ".git/index",
                ".git/info/exclude",
                ".git/logs/HEAD",
                ".git/logs/refs/heads/master",
                ".git/logs/refs/remotes/origin/master",
                ".git/objects/04/8babd2b9137736002b707a1535b268b4e48db4",
                ".git/objects/06/cf83c663522a5040357f2bfb3d5ba2b42c41a3",
                ".git/objects/08/84f07f09366b6ebf8c5659b6bc2b0814eb794d",
                ".git/objects/09/f389652ea194a4221fef5194b83d608f011146",
                ".git/objects/0b/9fbf9a88cf74454a59ba46c8bc18d7cece270b",
                ".git/objects/0d/431182c9423850aa2817bac9e098aa2c118c14",
                ".git/objects/0d/6d8e04dcd1e6c7515c53d876475ed36d5584da",
                ".git/objects/0d/85248bfff1bc7d1b87642e23bd7fc881d6e2fd",
                ".git/objects/0e/08bcfd0b63fc22a40b05fda96d681da1002000",
                ".git/objects/0e/10128c6ee581868789b4b022a13ed4e29c1af0",
                ".git/objects/10/9bf60cb1b3fa1b38e425e8d949705349224e0e",
                ".git/objects/13/b444515714d378370758186bf59e966ded7fd3",
                ".git/objects/13/eef4d7cfd6c5cf757a46a3366ae2ff7052ab1a",
                ".git/objects/14/0c805d572381924292a063ad8310b95ccc4e96",
                ".git/objects/14/10fc986f70bf08973f163e4e53aabd54c42f0b",
                ".git/objects/14/73749d0da23028624ec5470164c5ec578d1e72",
                ".git/objects/16/0d092dee5ff9a97399f58fc7209c04befc7452",
                ".git/objects/16/24da9d3f3c350d89c24a8e33919237fabd9437",
                ".git/objects/18/8bf6d178ba7db12a37a03b1a035aa53b55e30f",
                ".git/objects/18/ca6e3be1048e670301e98c09b0d8e6b3d1c907",
                ".git/objects/1a/522aeb71c8030f9931443104a0debc1bd5c5b6",
                ".git/objects/1b/1b99deae74eedbbee9e5783d52b19aed6e6420",
                ".git/objects/1b/5a5866f7a51c92be0c965762f03947e4ebc954",
                ".git/objects/1b/cfec9843f985642f7b891ba862a15b13043782",
                ".git/objects/1d/f636919eacf9e6bbe6208a40b157821616d2be",
                ".git/objects/20/4fa88377306f11ed9f3908c1b88c9422cd8bcb",
                ".git/objects/20/79880d8cd8b32e88c9731c6eebbd54ae1ce025",
                ".git/objects/28/b82207ba830276301b880ceda24d3d5e075c0a",
                ".git/objects/2a/67d9a5e458d9317a9181a15ecae858540dd725",
                ".git/objects/2a/8a014239e33bd74c9c76c67ea1f90be6045d87",
                ".git/objects/2b/50bedb8e6aa9692bd5ff656e22244d85db632e",
                ".git/objects/2d/341ac1cf9ebca37417d861b4169e5c28ce53d6",
                ".git/objects/2d/435e3eecee6d196a3a54a98f6afee3b14ccbe1",
                ".git/objects/2e/5355a01353218bb403c3987a492ef8a569c24b",
                ".git/objects/31/6d41035c23292cc3d1ba4c30d55e81a81a8ad1",
                ".git/objects/31/7a8ba5e199b64c0aef0d233deb3d5aeb264946",
                ".git/objects/33/f34188db2b18fb2a66730efc05e014cde380ce",
                ".git/objects/34/0d326e16e28081c0cccbd03b148baa3ca772f1",
                ".git/objects/35/99e6c4bb5632562d901a33307d4c72633efb20",
                ".git/objects/35/a0be16eb8f9b63a04015cc22880c3eb26e6ed5",
                ".git/objects/36/b6f1c5e6a77276fea92717aa4cecd943bd9d38",
                ".git/objects/37/05a99255e6f3b067cb8a1b5c60a9cfc038fdb2",
                ".git/objects/38/5e15ea77fc74f6b925f8a3fd6ad7f14528568b",
                ".git/objects/38/d294f3c69ae12e0d852591d323a642859ac2d2",
                ".git/objects/39/fdb114affab3cd2ba3e4665dc9ee91b5b0b786",
                ".git/objects/3a/26423a5e2c0a27a895365b7598b1bb9101b7c6",
                ".git/objects/3a/2a0457c9ac6af05ad5cb0bee0dcb0fc96bdd64",
                ".git/objects/3a/e43d62600368e81cb5d1a66e9f3bc3ba37e784",
                ".git/objects/3b/e69104546e5798251597ddd0dfd6e99b05e53f",
                ".git/objects/3d/01fdb5c9706f0bf6863af1f6fedf518ad10af5",
                ".git/objects/3e/b445e51ef3a6492af9a705aea32a14761190be",
                ".git/objects/3f/171e3d932bb5e951eee85c6a5d3208083351ef",
                ".git/objects/3f/582e606be1ec87c4bc1d7f7a9a997335907de7",
                ".git/objects/3f/72aeae24f9349fc3506ddfea5e816bf176bdce",
                ".git/objects/40/580aeaa11e092632ef248dc5ed972fa879c1fa",
                ".git/objects/40/ec4428364b781828a53419fe5eefb65411bbd5",
                ".git/objects/42/295e8a77f8101bf08929f6b57998d8949d253b",
                ".git/objects/43/6483fc793b3afa55a992d00d076008c4ba622d",
                ".git/objects/43/76d99f03e9c62b6fc15eec17f0443929e467a7",
                ".git/objects/45/35b876146ddaa661dbcda1b1b9174bbd6a5dc4",
                ".git/objects/45/9360b4569171523004bd96b80b5baeb1c415d0",
                ".git/objects/48/0fc1a90a1117e5191319e749dcf5901860b0c3",
                ".git/objects/49/1c9a6c54f8c7477fb8ffdec52bbeeb8951f693",
                ".git/objects/49/4e583518b60c6b8379464f006264e2efa3790d",
                ".git/objects/49/b3a47bf5fae4938e27b0a51f0b1c0d262cdea7",
                ".git/objects/4a/b3a2731fd08c0a91af2bca4e0474150f2dd03f",
                ".git/objects/4b/d0c493557d08af6584879ac1bc27c3043284d2",
                ".git/objects/4d/2b26b24f48c08cbaec057e64380de346053802",
                ".git/objects/50/c254c51a35bd0ff9fb9a04c4506c3e0f802c9b",
                ".git/objects/52/27c8867ce57227e455da16858bfe213367e862",
                ".git/objects/52/45db01443e0fb668cf9745a23d40d4b8ee9cce",
                ".git/objects/53/e5035dac3bb0c27159622a1e290f9b37b397e6",
                ".git/objects/54/d9595a9970efbc9fb8e59ab696df556304a057",
                ".git/objects/55/4bfda7cc891031c71a401e00ee3a41dc500695",
                ".git/objects/55/b0ba91c2e69c0dfa8beef6e7e57e6fe69d397b",
                ".git/objects/55/e652fff22ea734eb1977e6899db7614c4a11be",
                ".git/objects/57/b20a19a6bbebb8d377c4a9af3aa580ca61e7f1",
                ".git/objects/58/29729e497154953d72cb44161c5d0b454e2b12",
                ".git/objects/58/ac7303220f74d808b63047405fa3d3c4fa6217",
                ".git/objects/59/3f565279d3bdac9a8ed259da4f051eebdc953f",
                ".git/objects/59/6c6779b3f7f9fc5a3eb4afb4248d10cfe87b10",
                ".git/objects/59/9e3c0bde287d61a784a2b73c267547c0c76bc5",
                ".git/objects/5a/4b5188b3bdf13946541e00ec0fc9c7fc201df3",
                ".git/objects/5a/4b630d0b07771954a225f0ba85f0272c4cd9e4",
                ".git/objects/5b/847c95852d1055c98a82551a091c18100c23f1",
                ".git/objects/5c/08ee73061f6956c806ec6482381f5f0840e185",
                ".git/objects/5c/637f0f52357b17c2d97600f087c89ff664daae",
                ".git/objects/5c/95e3c7f25306f0932e8f5db5ef66d3750a3841",
                ".git/objects/5c/ce6b9d33cc8aba9e02d8b29ca3954774c1914e",
                ".git/objects/5d/0cc7fd694490a8596653ea5abc3ad2d58a6678",
                ".git/objects/63/3890cc94ed82e82f6656e497018ac497abfb20",
                ".git/objects/64/7e83290839861355c1cd23a750f2db4f731987",
                ".git/objects/64/b95315aec3fdce68c3331e3b18bd56e0611025",
                ".git/objects/64/ed2b458dd61c3c79a7ec82b0f61112989e4178",
                ".git/objects/67/3040356af90a4af0a4ec03280b5b501779baf4",
                ".git/objects/69/a698e2a27b82a421f6342df24c726a6341c972",
                ".git/objects/6a/26fa85b0eaf3d9b7cac2f31c8c7de70a94f277",
                ".git/objects/6a/deaf1dbfa4f8e7cd8568c046310bd5ca766416",
                ".git/objects/6b/0378631dba712335457cfc0110e786a6df8b6c",
                ".git/objects/6b/2701c41bb0766b0e98417646e32b3104d08196",
                ".git/objects/6b/b634a3351a5005245c01afc12a867bc8f9a8d7",
                ".git/objects/6b/d936ca204662a764a97bd3ac60aa01c1e2691b",
                ".git/objects/6e/ca72b8704618d58424ec6db461e7f806a99fb0",
                ".git/objects/6e/ebd561bdf9a7a04c4d34209a93d11b6ae38d33",
                ".git/objects/70/707d5faeabaf0a2eacee10bdb3e36ff63aaaf6",
                ".git/objects/70/e90d5fc97deafa9e2e7186bf157aa114358e54",
                ".git/objects/72/6cde727491194eed728fd534816fc3b154be73",
                ".git/objects/73/04d48226f344f0b66f4a6104ce2e2bd4d33429",
                ".git/objects/74/eeeeed11a28c0187866ccad8123f2003021f2d",
                ".git/objects/75/5523be11b820c0bc26309093a05f4f01d425bb",
                ".git/objects/75/daf261f993e00d2c27ab49f6d326dd0b5ebd1e",
                ".git/objects/76/80fd723a29961b36efcafa7aec892f5ed7fcc7",
                ".git/objects/76/b0b0de23e572c2a631fcac37c42a44a9899128",
                ".git/objects/78/1962a2c653e8dde6d03cf7b6d30fefbc966748",
                ".git/objects/78/a03cbc61cd104d9529c7cfefb116567be781a3",
                ".git/objects/7a/3ce0699c72e97594513b2ee76ff40ceff9c8d3",
                ".git/objects/7a/bdf72066abb875c7dc24e1fc6333d8937edf36",
                ".git/objects/7b/524018e1d5d1ce84468b04235356cf2fb09067",
                ".git/objects/7b/cbc01c10d371fbfbf05f80b6627b4a50e1698e",
                ".git/objects/7c/1504534f29eac40b6e9ef11eb33aba38b61a50",
                ".git/objects/7c/48d2583a828e6234146cdbe44b82a86ab2c1ed",
                ".git/objects/7d/47203892d2da9a186b91a50e0819e5d1845903",
                ".git/objects/7d/8ebc2ebcf489dfcd2743057ee89b6b2bbd9919",
                ".git/objects/7e/0789d8bb7a1fbf8379a94d094ed945f04024b9",
                ".git/objects/7f/3630f4645b80e61937b5b178095b9ccb2f1e27",
                ".git/objects/80/2d98c750c69434e7967bd7376b2a809931ad5b",
                ".git/objects/81/a34ac9cf3cda4f97e84f0c843fff15f6ffd1ef",
                ".git/objects/81/cdf63c69bff926873b7c94c0398589708bb4d1",
                ".git/objects/82/41eb2ab21537326d8b735809fcfe4c0b0a1892",
                ".git/objects/82/898507ffb30241b0e6016e599b11cb9236550d",
                ".git/objects/82/ce8440262b85e91678e209ad8f0f9f3efe21b2",
                ".git/objects/88/19e828f51651be3ff521449c1c79626b45755e",
                ".git/objects/88/8ec3497808ac41afd2b0ddca39f51380b64cb8",
                ".git/objects/8a/d2ad205733d9656b8cfdfc40197490a31d091c",
                ".git/objects/8b/71b04ed6fd8a82d3a5629d24ffb1fa4a6bc77f",
                ".git/objects/8d/0348b1eee2a3f26fb6449b137549923be24970",
                ".git/objects/8d/d56a45086e7b010290e095b7a4ab7c7d5c880b",
                ".git/objects/91/9f96d66791bbe800ffda44c741b33ddf5267c7",
                ".git/objects/93/0bcfeb9456ec46a89e094e5450617fef50fd86",
                ".git/objects/94/09e21d18f7610922a1f8a675d31831ba2a7f3a",
                ".git/objects/94/3f7b60ab0f380c8d67bcda89f16532037b0a19",
                ".git/objects/94/be8ef5101b404deeaadfd151ad9cea8e56762c",
                ".git/objects/95/23ec62cf99d677c512cd137e51a9cf9bf73bcc",
                ".git/objects/95/96a3cb28799228f06e8bcf3ed83160cedbb063",
                ".git/objects/98/1a6adf0c274c531738cc9036c69febb61512de",
                ".git/objects/98/f91c54fd0d50c795b488d8d1a2c0d584e0b143",
                ".git/objects/99/29951d58f92c0b4adae026fbcba0d8b44e5436",
                ".git/objects/99/88981bd22f3a06a746e848b8501f5669c6c342",
                ".git/objects/9a/007544721b8962a1548395b5dbfd9f3ffc2944",
                ".git/objects/9a/ad0105a8781ac8d04bf5ab847fbe23ede103e6",
                ".git/objects/9a/ff39521b55da009a337b6c9fa0dd1021150557",
                ".git/objects/9b/cc2c93d03284dcd18770d9d6d85ca44f48120e",
                ".git/objects/9c/72401ba303584609b71f9ca00462a2fa08f0ad",
                ".git/objects/9c/f338b7f7800a1bd5edc4b6038ee6348cd31e16",
                ".git/objects/9d/24eefa795698eaf852eeaa8918555251add86b",
                ".git/objects/a0/6d0ee689d58e3f04b92197d05ad60c3bf73802",
                ".git/objects/a0/b04281a079ad9208124e6a6141746355e9c2bd",
                ".git/objects/a2/236cb7cf2a9df8343ee4f9b4becd5703810068",
                ".git/objects/a2/7dc2c577a17ad30b5dfcd8ad9800de092f5fe3",
                ".git/objects/a2/cdb9501c35e8657fd1369d2bfd6beec14cb850",
                ".git/objects/a3/0e2a4def27513dc473ff0beb5ba849277fcb9f",
                ".git/objects/a3/4ec6b98982b38b3046de4e5a6bce017f91bb0a",
                ".git/objects/a5/2f6ccc06bacbe4e2f1a86677dc9af07925935f",
                ".git/objects/a6/a04c7a9669a78b0cd08e99bd6ee5396ab0de44",
                ".git/objects/a6/bbff67283c977d7a26af4185f0bb815476de34",
                ".git/objects/a8/d9c262d330a5b5b17f03781d555f7c33553336",
                ".git/objects/aa/4d4e84eba5c41ad4eeabf2b13e44ec8f24dbb7",
                ".git/objects/aa/94114a167b42f2d437873807ece2051e6a5f56",
                ".git/objects/ac/27a95ce0fb7b5a265fb01bc09e516d43126b60",
                ".git/objects/ac/c50e3bc72d4d908b0e152172bc3748b66e6ba1",
                ".git/objects/ae/11b505daa9752349758350b4b185afe9ecb57f",
                ".git/objects/ae/c7d72ce2cdab377cec48c1bf900f204ed9471a",
                ".git/objects/ae/edc1be256bc40e16d5fcc820b26f3aff79c558",
                ".git/objects/af/4d1ee8691b70ddc9b4c8e1f60f0e4a8baa4302",
                ".git/objects/b1/e8e2a3aff0e5dc3657c05d500bad6aa3d0c0ff",
                ".git/objects/b2/32f5140762c3b46492da4ad96aa6557f3bdc4e",
                ".git/objects/b2/fc3b1b2642b94aa0aeffe8a3b001f128d1086d",
                ".git/objects/b3/1ef3afd1f536e11f5e59575d1c1ef24b016d23",
                ".git/objects/b4/21188290e93833966dba943458ca0fa505f5a9",
                ".git/objects/b4/41fc67a2fdd8ef097161f3a530c65b7cce8edd",
                ".git/objects/b5/73032a8f3c1cddd14c467a8f349a6e6808b80d",
                ".git/objects/b7/652725a998919279dfbd176b0af689082ad272",
                ".git/objects/b7/be6fc226acb94417e12d787cfdb3a7d9a127b0",
                ".git/objects/b8/554cf95a8beb8157694d17e45237e8ebcf0bcf",
                ".git/objects/b8/f18915cc1453087d641fe29e4a556cfffc0c52",
                ".git/objects/b9/0fd0f473203f88f8b12e27880292e74ec33570",
                ".git/objects/b9/35ad721fd65b41618ab091c911cffcbcea6856",
                ".git/objects/b9/54c778785ce3ead8c676b1dd9c15164a1f8cf4",
                ".git/objects/bb/8ec02ffda2023892a2e4da7276ca6f10d19ea8",
                ".git/objects/bb/a7761a40d839ffaaf50eea135f8952e1a3bc88",
                ".git/objects/bc/6d05f58a30b585658c22b3ee72fc2b8ffb4405",
                ".git/objects/bd/0e3285295830f09178e229300a768dde3a9829",
                ".git/objects/c0/5503d82ef6e0aefc471599b2dcad1cbdcf0a38",
                ".git/objects/c0/ba407682a88ee8d04de9064a12a3779ad179a1",
                ".git/objects/c1/edf3171e9f076344ff0cf067be50228cf75b26",
                ".git/objects/c2/91d960edfa7bcb164329e61e90364b82a3daa2",
                ".git/objects/c3/b02670e715d79ce2edba40d5f4af5549170a12",
                ".git/objects/c5/1daa68a78840e99c518de4ac543f676dde826c",
                ".git/objects/c5/bdc17dd6ac35543542e2c30b0839727a4db3e4",
                ".git/objects/c5/e58c587081441322932a6b5eb92daf64e062f7",
                ".git/objects/c6/e81437b4dbde16b8b68ad27c478f6056b7c2ce",
                ".git/objects/c7/7c3730abdda0656b80dba2eb051075c141e492",
                ".git/objects/c7/ce182f5e89e757b957284978ef71b1ea0ed768",
                ".git/objects/c7/d6af9fed0962d679d0e5565657f2eb5668ea3f",
                ".git/objects/cb/5bb6193ce8de2b4cdf2aa30ae2a24d7be4e3a3",
                ".git/objects/cc/a19a9c89ac173e3a11077daea5bcb65d625377",
                ".git/objects/cd/9dda29777da24190affda7a0f04d1d8808345d",
                ".git/objects/ce/15da171b50ceb0fb88e9fecd1be16a396611a5",
                ".git/objects/d0/b71b5b3847b3c312fc4c4e0fa0a1d4ec029e09",
                ".git/objects/d3/936d856721a1d46b14b283d84c9128960d82d9",
                ".git/objects/d3/ce11f7d1a5f938d69c9d9eb68b8376eac32b88",
                ".git/objects/d4/b585bf78552d05bde959b2eae4c1e850bd2de4",
                ".git/objects/d7/09a2be51cc8f65c8c035c32ec836aad7cb27dd",
                ".git/objects/d7/bdebc6946b4ec1aa9c99e49c2b2035cd3324c4",
                ".git/objects/d8/9e6f10c87f4495e607090d0613f63e9b4fd630",
                ".git/objects/da/0c5855873bfd95212121699ac5852a1b77bf32",
                ".git/objects/dc/d9b333b5198b33c41478ae1c5c125f8dd2dfc2",
                ".git/objects/dd/3680928fd3a20aecfd95de0045f4631743bb0e",
                ".git/objects/de/5387cd23c4cd722ebce116589ccbb488cfcdd3",
                ".git/objects/e1/3985c3c7e83d4e2df5a94255160c211ac2e62a",
                ".git/objects/e1/8e7f989d9227066ea14b7b6c46b52647284f17",
                ".git/objects/e1/a21da29b58f969c3538bdb7be89abe5e9eb030",
                ".git/objects/e1/b3e5cc78db62b12a18c5313d1150f945b269b3",
                ".git/objects/e2/189aff952e3292694b51b4dea30d22663f8061",
                ".git/objects/e3/25b61be928a2e0b653e44720ad19ea72f8da2f",
                ".git/objects/e3/d688d6ec2207eced4389b5a253a897850f9a8c",
                ".git/objects/e4/460788b6de59809c1bfc0d804f4f3e458175ca",
                ".git/objects/e5/3e396c62a977df9eb04b6322216a58b4f75b3f",
                ".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391",
                ".git/objects/e6/c2d6f1ea2e4baa1666fce0566100a61e3ed7de",
                ".git/objects/e8/ef123b281aff57420073562daa1b11d75622b1",
                ".git/objects/ea/5856f6e48ac2b25a2d382ea19040a2d414766d",
                ".git/objects/eb/c12cc08042342183d7df9e67b5ea24dd48898c",
                ".git/objects/ec/1b68ef933b832c1a21c7fc59aac2e12f618633",
                ".git/objects/ee/f60b05f8ff61320e0ae025c2c32b5a06911fdc",
                ".git/objects/ef/95a704c4319483e5d6b1574c443ff1cf762cc0",
                ".git/objects/f1/20b5d264d68a80aa815510355389e17c5e488b",
                ".git/objects/f2/086071548d3882695dba01ca698ea523a3aa69",
                ".git/objects/f2/b89d984ac10fe15093b3dd028003bdd9f5ec84",
                ".git/objects/f4/3510507ab6662345582153ab686388e11c09fd",
                ".git/objects/f5/0da5e46fe45dcbc1a72a474bf7a64b8e0a66c7",
                ".git/objects/f5/271d83371c2cec465d7e2fc5b34d4bde6661c9",
                ".git/objects/f8/65bd9f41f6f38b019a0a019f3dc3a01fbef910",
                ".git/objects/f8/dce1865f5f566e2c1dbaabd703a2be0430cb39",
                ".git/objects/f9/61b1902e2fbe5efc991e86e696327fb502a909",
                ".git/objects/f9/b2842b71ecae671eb6a9bb2f111034c64381be",
                ".git/objects/fa/c099edaf973b1958cc1e7c236794f8613c78e3",
                ".git/objects/fa/ec8ca199f22cf843c212d62d370af5c3bff7fa",
                ".git/objects/fb/e64c583615cc42862f1cc9e1f16ca285cd3bbd",
                ".git/objects/fd/d7bfd55db231e352a93ab67c5db398b3b73d21",
                ".git/objects/fe/26e0865dd289ff706368070757e413fb678a72",
                ".git/objects/ff/bfe83b8f9d13a85665dce99d45ac223855f40a",
                ".git/refs/heads/master",
                ".git/refs/remotes/origin/master",
                ".gitignore",
                ".idea/.gitignore",
                ".idea/dirsync.iml",
                ".idea/modules.xml",
                ".idea/vcs.xml",
                ".idea/workspace.xml",
                "Makefile",
                "cmd/dirsync/cmds/preparedir/preparedir.go",
                "cmd/dirsync/cmds/sync/sync.go",
                "dirsync",
                "go.mod",
                "go.sum",
                "pkg/flags/flags.go",
                "pkg/utils/utils.go"
            ],
            "delete": [
                "aaa/adf",
                "pkg/consts/consts.go",
            ],
            "overwrite": [
                "README.md",
                "cmd/dirsync/dirsync.go",

            ]
        }
    }
}

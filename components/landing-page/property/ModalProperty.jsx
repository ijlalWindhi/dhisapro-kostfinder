'use client';
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  Input,
  FormControl,
  FormHelperText,
  Select,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

function ModalProperty({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ajukan Sewa</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <Flex gap={3} mt={3} flexDir={'column'}>
              <Flex flexDir={'column'}>
                <Input
                  placeholder="Masukkan Nama Lengkap"
                  name="nama"
                  id="nama"
                  {...register('nama', {
                    required: true,
                  })}
                />
                {errors.nama?.type === 'required' && (
                  <FormHelperText textColor="red" mb={4}>
                    Nama harus diisi
                  </FormHelperText>
                )}
              </Flex>
              <Flex flexDir={'column'}>
                <Input
                  placeholder="Masukkan NIK"
                  name="nik"
                  id="nik"
                  {...register('nik', {
                    required: true,
                    maxLength: 16,
                    minLength: 16,
                  })}
                />
                {errors.nik?.type === 'required' && (
                  <FormHelperText textColor="red" mb={4}>
                    NIK harus diisi
                  </FormHelperText>
                )}
                {errors.nik?.type === 'maxLength' && (
                  <FormHelperText textColor="red" mb={4}>
                    NIK harus 16 angka
                  </FormHelperText>
                )}
                {errors.nik?.type === 'minLength' && (
                  <FormHelperText textColor="red" mb={4}>
                    NIK harus 16 angka
                  </FormHelperText>
                )}
              </Flex>
              <Flex flexDir={'column'}>
                <Input
                  placeholder="Masukkan No Telephone"
                  name="telephone"
                  id="telephone"
                  {...register('telephone', {
                    required: true,
                    minLength: 9,
                    maxLength: 12,
                  })}
                />
                {errors.telephone?.type === 'required' && (
                  <FormHelperText textColor="red" mb={4}>
                    No Telephone harus diisi
                  </FormHelperText>
                )}
                {errors.telephone?.type === 'maxLength' && (
                  <FormHelperText textColor="red" mb={4}>
                    No Telephone maksimal 12 angka
                  </FormHelperText>
                )}
                {errors.telephone?.type === 'minLength' && (
                  <FormHelperText textColor="red" mb={4}>
                    No Telephone minimal 9 angka
                  </FormHelperText>
                )}
              </Flex>
              <Flex flexDir={'column'}>
                <Input
                  placeholder="Masukkan Alamat"
                  name="alamat"
                  id="alamat"
                  {...register('alamat', {
                    required: true,
                  })}
                />
                {errors.alamat?.type === 'required' && (
                  <FormHelperText textColor="red" mb={4}>
                    Alamat harus diisi
                  </FormHelperText>
                )}
              </Flex>
              <Flex flexDir={'column'}>
                <Input
                  name="tgl_check_in"
                  type="date"
                  id="tgl_check_in"
                  {...register('tgl_check_in', {
                    required: true,
                  })}
                />
                {errors.tgl_check_in?.type === 'required' && (
                  <FormHelperText textColor="red" mb={4}>
                    Tgl Check In harus diisi
                  </FormHelperText>
                )}
              </Flex>
              <Flex flexDir={'column'}>
                <Input
                  name="tgl_check_out"
                  type="date"
                  id="tgl_check_out"
                  {...register('tgl_check_out', {
                    required: true,
                  })}
                />
                {errors.tgl_check_out?.type === 'required' && (
                  <FormHelperText textColor="red" mb={4}>
                    Tgl Check Out harus diisi
                  </FormHelperText>
                )}
              </Flex>
              <Flex flexDir={'column'}>
                <Select
                  placeholder="Pilih Staff"
                  {...register('id_staff', {
                    required: true,
                  })}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                {errors.id_staff?.type === 'required' && (
                  <FormHelperText textColor="red" mb={4}>
                    Staff harus diisi
                  </FormHelperText>
                )}
              </Flex>
            </Flex>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Batal
          </Button>
          <Button
            colorScheme="blue"
            disabled={errors}
            onClick={() => {
              handleSubmit((values) => onSubmit(values))();
            }}
          >
            Ajukan
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalProperty;
